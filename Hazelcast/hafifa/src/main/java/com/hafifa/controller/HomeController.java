package com.hafifa.controller;

import com.hazelcast.core.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("")
public class HomeController {

    @Autowired
    HazelcastInstance hazelcastInstance;

    @GetMapping("/getMap")
    public IMap<Long, String> getMap() {
        return this.hazelcastInstance.getMap("test-cache");
    }

    @GetMapping("/addEntries")
    public String addEntries() {
        IMap<Long, String> map = this.hazelcastInstance.getMap("test-cache");

        for (Long addIndex = 0L; addIndex < 1000L; addIndex++) {
            map.put(addIndex, String.valueOf(addIndex));
        }

        return "added";
    }
}

