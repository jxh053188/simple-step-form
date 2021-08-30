import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector, } from "react-redux";
import { useHistory } from "react-router-dom";
import { enterWho } from "../RootSlice";
import { TextField, Button, Card, CardContent, CardActions } from "@material-ui/core";

export const Who = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const who = useSelector(state => state.who)
	const { register, handleSubmit } = useForm({ defaultValues: { who } })
	
	const onSubmit = (data) => {
		dispatch(enterWho(data.who))
		console.log(who)
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
								label="who"
								defaultValue=""
								variant="outlined"
								fullWidth
						
							/>
						</div>
						<button>Next</button>
						<div className="button-container">
                            <Button>Back</Button>
                            <Button type="submit">Next</Button>
                        </div>
					</form>
				</CardContent>
			</Card>
			</div>
		)
	
}