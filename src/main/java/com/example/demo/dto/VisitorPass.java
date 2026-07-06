package com.example.demo.dto;

public class VisitorPass {

    private String visitorName;
    private String hostEmployee;
    private String date;
    private String qrCode;

    public VisitorPass(String visitorName, String hostEmployee, String date, String qrCode) {
        this.visitorName = visitorName;
        this.hostEmployee = hostEmployee;
        this.date = date;
        this.qrCode = qrCode;
    }

    public String getVisitorName() {
        return visitorName;
    }

    public String getHostEmployee() {
        return hostEmployee;
    }

    public String getDate() {
        return date;
    }

    public String getQrCode() {
        return qrCode;
    }
}