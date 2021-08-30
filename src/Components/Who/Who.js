import React from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { enterWho } from "../../RootSlice";
import { TextField, Button, Card, CardContent, CardActions } from "@material-ui/core";
import { NavigateNext } from "@material-ui/icons";
import { classExpression } from "@babel/types";
import { makeStyles } from "@material-ui/core/styles";
import { render } from "@testing-library/react";

const useStyles = makeStyles({
	root: {
	  minWidth: 275,
	},
	bullet: {
	  display: 'inline-block',
	  margin: '0 2px',
	  transform: 'scale(0.8)',
	},
	title: {
	  fontSize: 14,
	},
	pos: {
	  marginBottom: 12,
	},
  });
  

export const Who = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const who = useSelector(state => state.who)
	const { register, handleSubmit } = useForm({ defaultValues: { who } })
	
	const onSubmit = (data) => {
		dispatch(enterWho(data.who))
		history.push("/what")
	}
	
	return (
			<div className="flex-container">
			<Card className="survey">
				<CardContent>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div>
							<label htmlFor="who"></label>
							<TextField
								required
								id="who"
								label="Who"
								defaultValue=""
								variant="outlined"
							/>
						</div>
						<Button type="submit">Next</Button>
					</form>
				</CardContent>
			</Card>
			</div>
		)
	
}