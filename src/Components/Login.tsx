import { Box, Button } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [phone, setPhone] = React.useState("")
    const [data, setData] = React.useState([])
    // const navigate = useNavigate()

    const api = "https://63e2295fad0093bf29c92624.mockapi.io/register"

    React.useEffect(() => {

        axios.get("https://63e2295fad0093bf29c92624.mockapi.io/register").then(res => {
            // console.log(res.data);
            setData(res.data)
            
        })
      
    }, [])

    const PostData = () => {

        if(firstName.length >= 3 && lastName.length >= 3) {

            axios.post(api, {
                firstName,
                lastName,
                email,
                phone
            }).then(res => {
                // console.log(res);
                getData()
                
            })

            // navigate("/")
            // getData()
      

        } else {

            alert("write correct information")
        }
    }

    const getData = () => {
        
        axios.get("https://63e2295fad0093bf29c92624.mockapi.io/register").then(res => {
            // console.log(res.data);
            setData(res.data)
            
        })

    }

    const deleteItem = (id: any) => {
        axios.delete(`${api}/${id}`).then(res => {
            setData(data.filter((del:any) => {

                return del.id != id
            }))
        })
    }
    
  return (
    <div>
        <Box textAlign={"center"}>
            <h1>بيانات التواصل</h1>
            <Box bg={"white"} shadow={"dark-lg"} p={10}>
                <input placeholder={"first name"} onChange={e => {setFirstName(e.target.value)}}></input>
                <br></br>
                <input placeholder={"last name"} onChange={e => {setLastName(e.target.value)}}></input>
                <br></br>
                <input placeholder={"email"} onChange={e => {setEmail(e.target.value)}}></input>
                <br></br>
                <input placeholder={"phone"} onChange={e => {setPhone(e.target.value)}}></input>
                <br></br>
                <br></br>
                <Button onClick={PostData}>Register</Button>
            </Box>
        </Box>
        <br></br>
        <br></br>
        <Box>
            {data.map((item: any, index) => {
                
                return <div key={item.id}>
                            <ul>
                                <li>Welcome {item.firstName}</li>
                                <li>Email {item.email}</li>
                                <li>Phone {item.phone}</li>
                            </ul>
                            <Button onClick={() => {deleteItem(item.id)}}>Delete</Button>
                            <br></br>
                            <br></br>
                        </div>
            })}
        </Box>
    </div>
  )
}

export default Login