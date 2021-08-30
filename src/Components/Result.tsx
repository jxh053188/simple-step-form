import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Card, CardContent } from "@material-ui/core";
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import { store } from "../Store";

export const Result = () => {
    const state = store.getState()
    const history = useHistory()
    console.log(state.who)

    let sentence = `${state.who} ${state.what} ${state.where} ${state.when}.`
    const { width, height } = useWindowSize()




    function handleClick() {
        history.push("/");
    }

    return (
        <>
            <Confetti
                width={width}
                height={height}
            />
            <div className="flex-container">
                <Card className="survey">
                    <CardContent>
                        <iframe src="https://giphy.com/embed/9w9Bpoiddg72U" width="99%" height="267" frameBorder="0" allowFullScreen></iframe>
                        <h1>{sentence}</h1>
                        <Button type="button" onClick={handleClick}>Start Over</Button>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}