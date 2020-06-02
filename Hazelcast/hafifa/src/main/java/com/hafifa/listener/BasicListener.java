package com.hafifa.listener;

import com.hafifa.processor.BasicProcessor;
import com.hazelcast.core.EntryEvent;
import com.hazelcast.core.Hazelcast;
import com.hazelcast.core.HazelcastInstance;
import com.hazelcast.core.IMap;
import com.hazelcast.map.listener.EntryAddedListener;
import org.springframework.stereotype.Component;

@Component
public class BasicListener implements EntryAddedListener<Long, String> {

    HazelcastInstance hazelcastInstance = Hazelcast.getHazelcastInstanceByName("hazelcast-instance");

    @Override
    public void entryAdded(EntryEvent<Long, String> entryEvent) {
        IMap<Long, String> map = this.hazelcastInstance.getMap("test-cache");

        map.submitToKey(entryEvent.getKey(), new BasicProcessor());
    }
}
