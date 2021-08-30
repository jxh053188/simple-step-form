import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { enterWhat } from "../RootSlice";
import { TextField, Button, Card, CardContent, CardActions } from "@material-ui/core";

export const What = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const what = useSelector(state => state.what)
	const { register, handleSubmit } = useForm({ defaultValues: { what } })
	
	const onSubmit = (data) => {
		dispatch(enterWhat(data.what))
		history.push("/where")
	}
	
	return (
			<div className="flex-container">
			<Card className="survey">
				<CardContent>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div>
							<label htmlFor="what"></label>
							<TextField
								required
								id="what"
								label="what"
								defaultValue=""
                                variant="outlined"
                                name="what"
                                {...register('what', { required: true })}
							/>
						</div>
                        <div>
                            <Button onClick={history.goBack}>Back</Button>
                            <Button type="submit">Next</Button>
                        </div>
					</form>
				</CardContent>
			</Card>
			</div>
		)
	
}