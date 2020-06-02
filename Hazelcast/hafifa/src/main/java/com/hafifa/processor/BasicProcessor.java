package com.hafifa.processor;

import com.hazelcast.core.IMap;
import com.hazelcast.core.Offloadable;
import com.hazelcast.map.AbstractEntryProcessor;
import org.springframework.stereotype.Component;

@Component
public class BasicProcessor extends AbstractEntryProcessor<Long, String> implements Offloadable {
    @Override
    public String getExecutorName() {
        return "test-exec";
    }

    @Override
    public Object process(IMap.Entry<Long, String> entry) {
        String newValue = entry.getValue() + " Modified!";

        try {
            Thread.sleep(10000);
        } catch (InterruptedException exception) {
            exception.printStackTrace();
        }

        entry.setValue(newValue);

        return null;
    }
}
