package com.example.demo.controller;

import java.io.File;
import java.io.IOException;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequestMapping("/file")
public class FileUploadController {


    private final String UPLOAD_DIR =
            System.getProperty("user.dir") 
            + "/src/main/resources/static/uploads/";


    @PostMapping("/upload")
    public String uploadFile(
            @RequestParam("file") MultipartFile file) 
            throws IOException {


        File folder = new File(UPLOAD_DIR);


        if (!folder.exists()) {
            folder.mkdirs();
        }


        String fileName = file.getOriginalFilename();


        file.transferTo(
            new File(UPLOAD_DIR + fileName)
        );


        return "File uploaded successfully: " + fileName;
    }

}