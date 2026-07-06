package com.example.demo.service;

import com.example.demo.model.Visitor;
import java.util.List;

public interface VisitorService {

    Visitor login(String email, String password);

    long totalVisitors();

    long pendingVisitors();

    long checkedInVisitors();

    List<Visitor> recentVisitors();
}