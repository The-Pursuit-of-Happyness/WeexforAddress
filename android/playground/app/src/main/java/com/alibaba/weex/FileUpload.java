package com.com.alibaba.weex;

import android.util.Log;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;
import com.taobao.weex.common.WXModuleAnno;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

/**
 * Created by huben on 19/01/2017.
 */
public class FileUpload extends WXModule {

    /**
     * var obj = {
        url: 'http://127.0.0.1:3000',
        method: 'POST', // default 'POST',support 'POST' and 'PUT'
        headers: {
            'Accept': 'application/json',
        },
        fields: {
            'hello': 'world',
        },
        files: [
            {
                name: 'one', // optional, if none then `filename` is used instead
                filename: 'one.w4a', // require, file name
                filepath: '/xxx/one.w4a', // require, file absoluete path
                filetype: 'audio/x-m4a', // options, if none, will get mimetype from `filepath` extension
            },
        ]
     };
     * @param options
     * @param callback
     */
    @WXModuleAnno(runOnUIThread = false)
    public void upload(String options, JSCallback callback) {
        String lineEnd = "\r\n";
        String twoHyphens = "--";
        String boundary =  "*****";

        Params params = JSON.parseObject(options, Params.class);
        Log.e("FILEUPLOAD", params.toString());

        HttpURLConnection connection = null;
        DataOutputStream outputStream = null;
        DataInputStream inputStream = null;
        URL connectURL = null;
        FileInputStream fileInputStream = null;

        int bytesRead, bytesAvailable, bufferSize;
        byte[] buffer;
        int maxBufferSize = 1*1024*1024;

        try {
            connectURL = new URL(params.url);
            connection = (HttpURLConnection) connectURL.openConnection();
            // Allow Inputs &amp; Outputs.
            connection.setDoInput(true);
            connection.setDoOutput(true);
            connection.setUseCaches(false);

            connection.setRequestMethod(params.method);

            if (params.headers != null) {
                // set headers
                Set<String> set = params.headers.keySet();
                Iterator<String> iterator = set.iterator();
                while (iterator.hasNext()) {
                    String key = iterator.next();
                    connection.setRequestProperty(key, params.headers.get(key));
                }

                connection.setRequestProperty("Connection", "Keep-Alive");
                connection.setRequestProperty("Content-Type", "multipart/form-data;boundary=" + boundary);

                outputStream = new DataOutputStream(connection.getOutputStream());
            }

            if (params.fields != null) {
                // set fields
                Set<String> fieldsSet = params.fields.keySet();
                Iterator<String> fieldsIt = fieldsSet.iterator();
                while (fieldsIt.hasNext()) {
                    String key = fieldsIt.next();
                    outputStream.writeBytes(twoHyphens + boundary + lineEnd);

                    outputStream.writeBytes("Content-Disposition: form-data; name=\"" + key + "\"" + lineEnd + lineEnd);
                    outputStream.writeBytes(params.fields.get(key));
                    outputStream.writeBytes(lineEnd);
                }
            }

            for (ParamFile paramFile : params.files) {
                File file = new File(paramFile.filepath);
                fileInputStream = new FileInputStream(file);

                outputStream.writeBytes(twoHyphens + boundary + lineEnd);
                outputStream.writeBytes("Content-Disposition: form-data; name=\"" + paramFile.name + "\";filename=\"" + paramFile.filename + "\"" + lineEnd);
                outputStream.writeBytes(lineEnd);

                bytesAvailable = fileInputStream.available();
                bufferSize = Math.min(bytesAvailable, maxBufferSize);
                buffer = new byte[bufferSize];

                // Read file
                bytesRead = fileInputStream.read(buffer, 0, bufferSize);

                while (bytesRead > 0) {
                    outputStream.write(buffer, 0, bufferSize);
                    bytesAvailable = fileInputStream.available();
                    bufferSize = Math.min(bytesAvailable, maxBufferSize);
                    bytesRead = fileInputStream.read(buffer, 0, bufferSize);
                }

                outputStream.writeBytes(lineEnd);
            }

            outputStream.writeBytes(twoHyphens + boundary + twoHyphens + lineEnd);

            // Responses from the server (code and message)

            int serverResponseCode = connection.getResponseCode();
            String serverResponseMessage = connection.getResponseMessage();
            Log.e("FILEUPLOAD", serverResponseCode + ":" + serverResponseMessage);
            if (serverResponseCode != 200) {
                fileInputStream.close();
                outputStream.flush();
                outputStream.close();
                JSONObject mainObject = new JSONObject();
                mainObject.put("data", null);
                mainObject.put("msg", serverResponseMessage);
                mainObject.put("code", serverResponseCode);
                callback.invoke(mainObject.toJSONString());
            } else {
                BufferedReader br = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                StringBuilder sb = new StringBuilder();
                String line;
                while ((line = br.readLine()) != null) {
                    sb.append(line);
                }
                br.close();
                String data = sb.toString();
                JSONObject mainObject = new JSONObject();
                mainObject.put("data", data);
                mainObject.put("msg", "");
                mainObject.put("code", serverResponseCode);


                fileInputStream.close();
                outputStream.flush();
                outputStream.close();
                callback.invoke(mainObject.toJSONString());
            }

        } catch(Exception ex) {
            //callback.invoke("Error happened: " + ex.getMessage(), null);
            ex.printStackTrace();
            callback.invoke(null);
        }
    }

    static class Params {
        String url;
        String method;
        HashMap<String, String> headers;
        HashMap<String, String> fields;
        List<ParamFile> files;

        @Override
        public String toString() {
            return "Params{" +
                    "url='" + url + '\'' +
                    ", method='" + method + '\'' +
                    ", headers=" + headers +
                    ", fields=" + fields +
                    ", files=" + files +
                    '}';
        }
    }

    static class ParamFile {
        String name;
        String filetype;
        String filepath;
        String filename;

        @Override
        public String toString() {
            return "ParamFile{" +
                    "name='" + name + '\'' +
                    ", filetype='" + filetype + '\'' +
                    ", filepath='" + filepath + '\'' +
                    ", filename='" + filename + '\'' +
                    '}';
        }
    }
}
