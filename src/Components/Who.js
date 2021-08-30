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
	const { register, handleSubmit, formState: {errors} } = useForm({ defaultValues: { who } })
	
	const onSubmit = (data) => {
		dispatch(enterWho(data.who))
		console.log(who)
		history.push("/what")
	}
	
	return (
			<div className="flex-container">
			<Card className="survey">
				<CardContent>
					<CardActions>
					<form onSubmit={handleSubmit(onSubmit)}>
							<label htmlFor="who"></label>
							<TextField
								name="who"
								required
								id="who"
								label="who"
								variant="outlined"
								fullWidth
								{...register('who', { required: true })}
						
							/>
						<div className="button-container">
                        	<Button type="submit">Next</Button>
                        </div>
						</form>
						</CardActions>
				</CardContent>
			</Card>
			</div>
		)
	
}