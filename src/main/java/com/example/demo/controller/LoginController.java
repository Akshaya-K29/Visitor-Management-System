package com.example.demo.controller;

import com.example.demo.dto.LoginRequest;
import com.example.demo.model.Visitor;
import com.example.demo.repository.VisitorRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/visitors")
@CrossOrigin(origins = "*")
public class LoginController {

    private final VisitorRepository visitorRepository;

    public LoginController(VisitorRepository visitorRepository) {
        this.visitorRepository = visitorRepository;
    }

    // LOGIN API
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {

        Visitor visitor = visitorRepository.findByEmailAndPassword(
                request.getEmail(),
                request.getPassword()
        );

        Map<String, Object> response = new HashMap<>();

        if (visitor != null) {

            response.put("message", "Login successful");
            response.put("id", visitor.getId());
            response.put("name", visitor.getName());
            response.put("email", visitor.getEmail());
            response.put("role", visitor.getStatus()); // or role if you have role field

            return ResponseEntity.ok(response);

        } else {

            response.put("message", "Invalid email or password");

            return ResponseEntity.badRequest().body(response);
        }
    }
}