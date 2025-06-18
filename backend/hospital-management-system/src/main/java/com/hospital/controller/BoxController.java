package com.hospital.controller;

import com.hospital.model.Box;
import com.hospital.repository.BoxRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/boxes")
@CrossOrigin("*")
public class BoxController {

    private final BoxRepository boxRepository;

    public BoxController(BoxRepository boxRepository) {
        this.boxRepository = boxRepository;
    }

    @GetMapping
    public List<Box> getAllBoxes() {
        return boxRepository.findAll();
    }
}
