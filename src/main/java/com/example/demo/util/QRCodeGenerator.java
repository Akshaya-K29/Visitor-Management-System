package com.example.demo.util;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Base64;

public class QRCodeGenerator {


    // Generate QR as Base64 (JSON response)
    public static String generateQRCode(String data) {

        try {

            QRCodeWriter qrCodeWriter = new QRCodeWriter();


            BitMatrix bitMatrix =
                    qrCodeWriter.encode(
                            data,
                            BarcodeFormat.QR_CODE,
                            200,
                            200
                    );


            ByteArrayOutputStream outputStream =
                    new ByteArrayOutputStream();


            MatrixToImageWriter.writeToStream(
                    bitMatrix,
                    "PNG",
                    outputStream
            );


            byte[] qrImage =
                    outputStream.toByteArray();


            return Base64.getEncoder()
                    .encodeToString(qrImage);


        } catch (WriterException | IOException e) {

            throw new RuntimeException("QR Code generation failed");

        }

    }





    // Generate QR as Image (for browser/Postman view)
    public static byte[] generateQRCodeImage(String data) {


        try {


            QRCodeWriter qrCodeWriter =
                    new QRCodeWriter();



            BitMatrix bitMatrix =
                    qrCodeWriter.encode(
                            data,
                            BarcodeFormat.QR_CODE,
                            200,
                            200
                    );



            ByteArrayOutputStream outputStream =
                    new ByteArrayOutputStream();



            MatrixToImageWriter.writeToStream(
                    bitMatrix,
                    "PNG",
                    outputStream
            );



            return outputStream.toByteArray();



        } catch (WriterException | IOException e) {


            throw new RuntimeException("QR Image generation failed");


        }


    }

}