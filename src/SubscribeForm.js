import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import SubscriptionResponse from './SubscriptionResponse';
import 'react-toastify/dist/ReactToastify.css';
import './SubscribeForm.css';
import axios from 'axios';

const SubscribeForm = () => {
    const [email, setEmail] = useState('');
    const [githubUsername, setGithubUsername] = useState('');
    const [jobRole, setJobRole] = useState('');
    const [subscriptionResponse, setSubscriptionResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const subscribe = async () => {
        setIsLoading(true);

        try {
            const response = await fetch('https://9xt3etskse.execute-api.ap-south-1.amazonaws.com/default/job-alert-llm', {
                method: 'POST',
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    github: githubUsername,
                    jobrole: jobRole,
                }),
            });
        
            if (response.status === 200) {
                const data = await response.json();

                if(data.body != undefined) {
                    if (typeof data.body === 'string') {
                        setSubscriptionResponse(JSON.parse(data.body));
                        toast.success("Subscribed successfully!");
                    } 
                    else {
                        setSubscriptionResponse(data.body);
                        toast.success("Subscribed successfully!");
                    }
                }
                else {
                    setSubscriptionResponse("Subscription failed!");
                    toast.error("Subscription failed!");
                } 
            } 
            else {
                const errorData = await response.json();
                console.log(errorData.body);
                setSubscriptionResponse(errorData.body);
                toast.error("Subscription failed!");
            }
        } 
        catch (error) {
            console.log(error);
            setSubscriptionResponse("Subscription failed!");
            toast.error("Subscription failed!");
        }
        finally {
            setIsLoading(false); // Set loading back to false when the request is complete
        }
    };

    // To be updated
    const unsubscribe = async () => {
        try {
            await writeToDynamoDB({ email, githubUsername, jobRole, unsubscribe: true });
            toast.success("Unsubscribed successfully!");
        } 
        catch (error) {
            toast.error("Unsubscription failed!");
        }
    };

    const writeToDynamoDB = async (data) => {
        const apiEndpoint = 'https://hn1p2o7g5i.execute-api.ap-south-1.amazonaws.com/default/job-alert-llm';
        await axios.post(apiEndpoint, data);
    };

    return (
        <div className="formContainer">
            <ToastContainer position="bottom-center"/>
            <input 
                className="input"
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email" 
                required
            />
            <input 
                className="input"
                type="text" 
                value={githubUsername}
                onChange={(e) => setGithubUsername(e.target.value)} 
                placeholder="GitHub Username" 
                required
            />
            <input 
                className="input"
                type="text" 
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)} 
                placeholder="Job Role" 
                required
            />
            <button className="button sub" onClick={subscribe}>Show Me Jobs!</button>
            {/* <a className="button unsub" onClick={unsubscribe}>Unsubscribe</a> */}

            {
                isLoading ? (
                    <SubscriptionResponse message={'Loading...'} />
                ) : (
                    subscriptionResponse && <SubscriptionResponse message={subscriptionResponse} />
                )
            }
        </div>
    );
};

export default SubscribeForm;
