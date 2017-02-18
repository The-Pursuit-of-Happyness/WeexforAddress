package com.alibaba.weex;

import android.Manifest;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.support.annotation.Nullable;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v4.content.FileProvider;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.widget.Toast;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by huben on 18/01/2017.
 */
public class PhotoActivity extends AppCompatActivity {

    private static final int PERMISSIONS_REQUEST_CAMERA = 0x001;
    private static final int PERMISSIONS_REQUEST_STORE = 0x002;

    private static final String TYPE = "type";

    private static final int REQUEST_CODE_PICK_IMAGE = 0;
    private static final int REQUEST_CODE_CAPTURE = 1;

    private static PhotoCallback mCallback;

    private String mCurrentPhotoPath;

    public static Intent makeIntent(Context context, int type, PhotoCallback photoCallback) {
        mCallback = photoCallback;

        Intent intent = new Intent(context, PhotoActivity.class);
        intent.putExtra(TYPE, type);
        return intent;
    }

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.WRITE_EXTERNAL_STORAGE)
                != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE},
                    PERMISSIONS_REQUEST_STORE);
        } else {
            // ignore
        }

        int type = getIntent().getIntExtra(TYPE, 0);
        if (type == FileInput.TYPE_IMAGE) {
            Intent intent = new Intent(Intent.ACTION_PICK);
            intent.setType("image/*");//相片类型
            if (intent.resolveActivity(getPackageManager()) != null) {
                startActivityForResult(intent, REQUEST_CODE_PICK_IMAGE);
            } else {
                mCallback.onCancel();
                finish();
            }
        } else if (type == FileInput.TYPE_CAPTURE) {
            if (ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA)
                    != PackageManager.PERMISSION_GRANTED) {
                ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.CAMERA},
                        PERMISSIONS_REQUEST_CAMERA);
            } else {
                selectCamera();
            }
        } else {
            Log.e("PhotoActivity", "FileInput component not support type of " + type);
            mCallback.onCancel();
            finish();
        }
    }

    private void selectCamera() {
        File photoFile = null;
        try {
            photoFile = createImageFile();
        } catch (IOException ex) {
            // Error occurred while creating the File
            ex.printStackTrace();
            mCallback.onCancel();
            finish();
        }
        if (photoFile != null) {
            Uri photoURI = Uri.fromFile(photoFile);
            Intent takePictureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
            takePictureIntent.putExtra(MediaStore.EXTRA_OUTPUT, photoURI);
            if (takePictureIntent.resolveActivity(getPackageManager()) != null) {
                startActivityForResult(takePictureIntent, REQUEST_CODE_CAPTURE);
            } else {
                mCallback.onCancel();
                finish();
            }
        } else {
            mCallback.onCancel();
            finish();
        }
    }

    private void galleryAddPic() {
        Intent mediaScanIntent = new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE);
        File f = new File(mCurrentPhotoPath);
        Uri contentUri = Uri.fromFile(f);
        mediaScanIntent.setData(contentUri);
        this.sendBroadcast(mediaScanIntent);
    }


    private File createImageFile() throws IOException {
        // Create an image file name
        String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
        String imageFileName = "JPEG_" + timeStamp + "_";
//        File storageDir = getFilesDir();
        File storageDir = new File(Environment.getExternalStorageDirectory(), "fchz");
        if (!storageDir.exists()) {
            storageDir.mkdir();
        }
        File image = File.createTempFile(
                imageFileName,  /* prefix */
                ".jpg",         /* suffix */
                storageDir      /* directory */
        );

        // Save a file: path for use with ACTION_VIEW intents
        mCurrentPhotoPath = image.getAbsolutePath();
        return image;
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode == PERMISSIONS_REQUEST_CAMERA) {
            if (grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                selectCamera();
            } else {
                // Permission Denied
                Toast.makeText(PhotoActivity.this, "权限拒绝", Toast.LENGTH_SHORT).show();
                mCallback.onCancel();
                finish();
            }
        } else if(requestCode == PERMISSIONS_REQUEST_STORE) {
            if (grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                // ignore
            } else {
                ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE},
                        PERMISSIONS_REQUEST_STORE);
            }
        }

    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        Log.e("REQUEST_CODE_CAPTURE", "aa=" + resultCode + "=" + requestCode);
        if (resultCode == RESULT_OK && requestCode == REQUEST_CODE_PICK_IMAGE) {
            String path = null;
            String[] proj = { MediaStore.Images.Media.DATA };
            Cursor cursor = getContentResolver().query(data.getData(), proj, null, null, null);
            if(cursor.moveToFirst()){;
                int column_index = cursor.getColumnIndexOrThrow(MediaStore.Images.Media.DATA);
                path = cursor.getString(column_index);
            }
            cursor.close();
            Log.d("REQUEST_CODE_PICK_IMAGE", path);
            mCallback.onFinish(path);
        } else if (requestCode == REQUEST_CODE_CAPTURE) {
            Log.e("REQUEST_CODE_CAPTURE", mCurrentPhotoPath);
            mCallback.onFinish(mCurrentPhotoPath);
            galleryAddPic();
        } else {
            mCallback.onCancel();
        }
        finish();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        mCallback = null;
    }

    static interface PhotoCallback {
        void onFinish(String path);

        void onCancel();
    }
}
