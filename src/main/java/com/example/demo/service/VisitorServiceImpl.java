package com.example.demo.service;

import com.example.demo.model.Visitor;
import com.example.demo.repository.VisitorRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VisitorServiceImpl implements VisitorService {

    private final VisitorRepository visitorRepository;

    public VisitorServiceImpl(VisitorRepository visitorRepository) {
        this.visitorRepository = visitorRepository;
    }

    @Override
    public Visitor login(String email, String password) {
        return visitorRepository.findByEmailAndPassword(email, password);
    }

    @Override
    public long totalVisitors() {
        return visitorRepository.count();
    }

    @Override
    public long pendingVisitors() {
        return visitorRepository.countByStatus("PENDING");
    }

    @Override
    public long checkedInVisitors() {
        return visitorRepository.countByStatus("CHECKED_IN");
    }

    @Override
    public List<Visitor> recentVisitors() {
        return visitorRepository.findTop5ByOrderByIdDesc();
    }
}