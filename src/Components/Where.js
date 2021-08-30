import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { enterWhere } from "../RootSlice";
import { TextField, Button, Card, CardContent} from "@material-ui/core";

export const Where = () => {
    const state = useSelector(state => state)
	const dispatch = useDispatch()
	const history = useHistory()
	const where = useSelector(state => state.where)
	const { register, handleSubmit } = useForm({ defaultValues: { where } })
	
	const onSubmit = (data) => {
		dispatch(enterWhere(data.where))
		history.push("/when")
	}
	
	return (
			<div className="flex-container">
			<Card className="survey">
                <CardContent>
                    <p>Where is { state.who }?</p>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div>
							<label htmlFor="where"></label>
                            <TextField
                                className="answer-box"
								required
								id="where"
								label="Enter a place"
                                variant="outlined"
                                name="where"
                                {...register('where', { required: true })}
							/>
                        </div>
                        <div className="button-container">
                        <Button onClick={history.goBack}>Back</Button>
                            <Button type="submit">Next</Button>
                        </div>
					</form>
				</CardContent>
			</Card>
			</div>
		)
	
}