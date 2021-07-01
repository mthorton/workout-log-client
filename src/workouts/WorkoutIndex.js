import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';

const WorkoutIndex = (props) => {

    const [workouts, setWorkouts] = useState([]);

    const fetchWorkouts = () => {
        fetch('http://localhost:3000/log/log', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => res.json())
            .then((logData) => {
                setWorkouts(logData)
                console.log(logData)
            })
    };

    useEffect(() => {
        fetchWorkouts();
    }, [])

    return (
        <Container>
            <Row>
                <Col md="3">
                    <h2>Create Component</h2>
                </Col>
                <Col md="9">
                    <h2>See a table</h2>
                </Col>
            </Row>
        </Container>
    )
}

export default WorkoutIndex;