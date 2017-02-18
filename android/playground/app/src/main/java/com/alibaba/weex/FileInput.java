package com.alibaba.weex;

import android.content.Intent;
import android.support.annotation.Nullable;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;
import com.taobao.weex.common.WXModuleAnno;

/**
 * Created by huben on 18/01/2017.
 */
public class FileInput extends WXModule {

    public static final int TYPE_IMAGE = 0;
    public static final int TYPE_CAPTURE = 1;

    @WXModuleAnno(runOnUIThread = true)
    public void select(int type, @Nullable final JSCallback callback){
        Intent intent = PhotoActivity.makeIntent(mWXSDKInstance.getContext(), type, new PhotoActivity.PhotoCallback() {
            @Override
            public void onFinish(String path) {
                callback.invoke(path);
            }

            @Override
            public void onCancel() {
                callback.invoke(null);
            }
        });
        mWXSDKInstance.getContext().startActivity(intent);
    }
}
