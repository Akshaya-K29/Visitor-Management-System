package com.example.demo.controller;

import com.example.demo.repository.VisitorRepository;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/dashboard")
@CrossOrigin("*")
public class DashboardController {


    private final VisitorRepository visitorRepository;


    public DashboardController(VisitorRepository visitorRepository){

        this.visitorRepository = visitorRepository;

    }



    @GetMapping("/stats")
    public Map<String,Object> getStats(){


        Map<String,Object> data = new HashMap<>();


        data.put("totalVisitors",
                visitorRepository.count());



        data.put("todayVisitors",
                visitorRepository.countTodayVisitors());



        data.put("pending",
                visitorRepository.countByStatus("PENDING"));



        data.put("checkedIn",
                visitorRepository.countByStatus("CHECKED_IN"));



        data.put("checkedOut",
                visitorRepository.countByStatus("CHECKED_OUT"));



        // ⭐ IMPORTANT

        data.put("recentVisitors",
                visitorRepository.findTop5ByOrderByIdDesc());



        return data;

    }

}