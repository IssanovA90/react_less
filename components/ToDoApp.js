import React, { useState } from 'react';
import { Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Layout, InputV1, ButtonV1 } from "./Function";


export const ToDoApp = () => {
    const [taskName, settaskName] = useState('');
    const [tasks, settasks] = useState([]);

    const addTask = () => {
        if (taskName) {
            const newTask = {
                id: Date.now(),
                value: taskName,
            };
            settasks([...tasks, newTask]);
            settaskName('');
        }
    };

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        settasks(updatedTasks);
    };

    return (
        <Layout>
            <Text style={styles.title}>Список задач</Text>
            <InputV1
                placeholder={"Введите название задачи"}
                value={taskName}
                onChangeText={(text) => settaskName(text)}
            />
            <ButtonV1
                title={"Добавить"}
                onPress={addTask}
            />

            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onLongPress={() => deleteTask(item.id)}
                        style={styles.tolist}
                    >
                        <Text>{item.value}</Text>
                    </TouchableOpacity>
                )}
            />
        </Layout>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    tolist: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        marginBottom: 8,
    },
});


