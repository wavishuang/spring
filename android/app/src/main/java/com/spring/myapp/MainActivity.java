package com.spring.myapp;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.google.firebase.FirebaseApp; // 1. 導入

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // 2. 在 Bridge 啟動前強制初始化
        FirebaseApp.initializeApp(this); 
    }
}
