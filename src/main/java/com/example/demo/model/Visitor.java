package com.example.demo.model;

import jakarta.persistence.*;
import java.time.LocalDate;


@Entity
public class Visitor {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String name;

    private String email;

    private String password;

    private String mobile;


    private String company;

    private String purpose;


    private String hostName;

    private String hostPhone;


    private String photo;

    private String idProof;


    private String role;


    private LocalDate visitDate;


    private String status;



    public Visitor(){}



    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id=id;
    }



    public String getName(){
        return name;
    }


    public void setName(String name){
        this.name=name;
    }



    public String getEmail(){
        return email;
    }


    public void setEmail(String email){
        this.email=email;
    }



    public String getPassword(){
        return password;
    }


    public void setPassword(String password){
        this.password=password;
    }



    public String getMobile(){
        return mobile;
    }


    public void setMobile(String mobile){
        this.mobile=mobile;
    }



    public String getCompany(){
        return company;
    }


    public void setCompany(String company){
        this.company=company;
    }



    public String getPurpose(){
        return purpose;
    }


    public void setPurpose(String purpose){
        this.purpose=purpose;
    }



    public String getHostName(){
        return hostName;
    }


    public void setHostName(String hostName){
        this.hostName=hostName;
    }



    public String getHostPhone(){
        return hostPhone;
    }


    public void setHostPhone(String hostPhone){
        this.hostPhone=hostPhone;
    }



    public String getPhoto(){
        return photo;
    }


    public void setPhoto(String photo){
        this.photo=photo;
    }



    public String getIdProof(){
        return idProof;
    }


    public void setIdProof(String idProof){
        this.idProof=idProof;
    }



    public String getRole(){
        return role;
    }


    public void setRole(String role){
        this.role=role;
    }



    public LocalDate getVisitDate(){
        return visitDate;
    }


    public void setVisitDate(LocalDate visitDate){
        this.visitDate=visitDate;
    }



    public String getStatus(){
        return status;
    }


    public void setStatus(String status){
        this.status=status;
    }


}