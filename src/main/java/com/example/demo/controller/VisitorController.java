package com.example.demo.controller;

import com.example.demo.model.Visitor;
import com.example.demo.repository.VisitorRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping("/visitors")
@CrossOrigin("*")
public class VisitorController {

    private final VisitorRepository visitorRepository;

    public VisitorController(VisitorRepository visitorRepository) {
        this.visitorRepository = visitorRepository;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerVisitor(@RequestBody Visitor visitor) {

        visitor.setVisitDate(LocalDate.now());

        visitor.setStatus("PENDING");

        visitor.setRole("VISITOR");   // <-- Add this line

        Visitor savedVisitor = visitorRepository.save(visitor);

        return ResponseEntity.ok(savedVisitor);
    }
        
        @GetMapping
        public ResponseEntity<?> getAllVisitors(){

            return ResponseEntity.ok(visitorRepository.findAll());

        }
        @DeleteMapping("/delete/{id}")
        public ResponseEntity<String> deleteVisitor(@PathVariable Long id) {

            if (!visitorRepository.existsById(id)) {
                return ResponseEntity.notFound().build();
            }

            visitorRepository.deleteById(id);

            return ResponseEntity.ok("Visitor Deleted Successfully");
        }
        @PutMapping("/approve/{id}")
        public ResponseEntity<?> approveVisitor(@PathVariable Long id) {

            Visitor visitor = visitorRepository.findById(id).orElse(null);

            if (visitor == null) {
                return ResponseEntity.notFound().build();
            }

            visitor.setStatus("APPROVED");

            visitorRepository.save(visitor);

            return ResponseEntity.ok(visitor);
        }
        @PutMapping("/checkin/{id}")
        public ResponseEntity<?> checkInVisitor(@PathVariable Long id) {

            Visitor visitor = visitorRepository.findById(id).orElse(null);

            if (visitor == null) {
                return ResponseEntity.notFound().build();
            }

            visitor.setStatus("CHECKED_IN");

            visitorRepository.save(visitor);

            return ResponseEntity.ok(visitor);
        }
        @PutMapping("/checkout/{id}")
        public ResponseEntity<?> checkOutVisitor(@PathVariable Long id) {

            Visitor visitor = visitorRepository.findById(id).orElse(null);

            if (visitor == null) {
                return ResponseEntity.notFound().build();
            }

            visitor.setStatus("CHECKED_OUT");

            visitorRepository.save(visitor);

            return ResponseEntity.ok(visitor);
        }
    }
