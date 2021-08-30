import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { TextField, Button, Card, CardContent, CardActions } from "@material-ui/core";

export const Result = () => {
    const state = useSelector(state => state)
    const history = useHistory()
    let sentence = `${state.who} ${state.what} ${state.where} ${state.when}.`

    function handleClick() {
        history.push("/");
      }

    return (
        <>
            <div className="flex-container">
			<Card className="survey">
				<CardContent>
                    <p>{sentence}</p>
                    <Button type="button" onClick={handleClick}>Start Over</Button>
				</CardContent>
			</Card>
			</div>
        </>
    )
}