import React, {useState, useEffect, } from 'react'
import axios from 'axios'
import { Link,} from 'react-router-dom';
import { Card, Header, Button, } from 'semantic-ui-react'

// using HOOKS
const Departments = (props) => {
    const [departments, setDepartments] = useState([]);

    useEffect ( () => {
        //todo make get with axios to get departments
        // todo update state
        axios.get('api/departments')
        .then( res => {
            setDepartments( res.data);
        })
    }, []);

    const deleteItem = (id) => {
        axios.delete('/api/departments/:id')
        .then( res => {
            setDepartments( res.data)
        })
    }

    const renderDepartments = () => {
        if (departments.length <= 0)
            return <Header as='h2'> - No Departments Available - </Header>
        return departments.map( department => (
            <Card key={department.id}>
                <Card.Content>
                    <Card.Header> {department.name}</Card.Header>
                    <Card.Description>{department.description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button as={Link} to={`/api/departments/${department.id}/items`} color='blue'> 
                    view items
                    </Button>
                    <Button as={deleteItem(`${department.id}`)} color='blue'> 
                    delete
                    </Button>
                </Card.Content>
            </Card>
        ))
    };
    return (
        <div>
            <Header as='h1'> Departments</Header>
            <br />
            <Button as={Link} to='/departments/new' color ='blue'>
                Add Department
            </Button>
            <br />
            <br />
            <Card.Group>
                {renderDepartments()}
            </Card.Group>
        </div>
    )
};


export default Departments;
