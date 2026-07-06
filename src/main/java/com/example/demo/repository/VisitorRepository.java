package com.example.demo.repository;


import com.example.demo.model.Visitor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;


public interface VisitorRepository extends JpaRepository<Visitor,Long>{



    Visitor findByEmailAndPassword(String email,String password);



    long countByStatus(String status);



    long countByVisitDate(LocalDate visitDate);



    default long countTodayVisitors(){

        return countByVisitDate(LocalDate.now());

    }



    List<Visitor> findTop5ByOrderByIdDesc();


}