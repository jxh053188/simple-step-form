import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { enterWhen } from "../RootSlice";
import { TextField, Button, Card, CardContent, CardActions } from "@material-ui/core";

export const When = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const when = useSelector(state => state.when)
	const { register, handleSubmit } = useForm({ defaultValues: { when } })
	
	const onSubmit = (data) => {
		dispatch(enterWhen(data.when))
		history.push("/result")
	}
	
	return (
			<div className="flex-container">
			<Card className="survey">
				<CardContent>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div>
							<label htmlFor="when"></label>
							<TextField
								required
								id="when"
								label="When"
								defaultValue=""
								variant="outlined"
							/>
						</div>
                        <div>
                            <Button>Back</Button>
                            <Button type="submit">Next</Button>
                        </div>
					</form>
				</CardContent>
			</Card>
			</div>
		)
	
}