import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { enterWhat } from "../RootSlice";
import { TextField, Button, Card, CardContent} from "@material-ui/core";

export const What = () => {
    const state = useSelector(state => state)
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
                    <p>What is {state.who} doing?</p>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div>
							<label htmlFor="what"></label>
                            <TextField
                                className = "answer-box"
								required
								id="what"
								label="Enter an action"
								defaultValue=""
                                variant="outlined"
                                name="what"
                                {...register('what', { required: true })}
							/>
						</div>
                        <div className = "button-container">
                            <Button onClick={history.goBack}>Back</Button>
                            <Button type="submit">Next</Button>
                        </div>
					</form>
				</CardContent>
			</Card>
			</div>
		)
	
}