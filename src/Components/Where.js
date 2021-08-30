import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { enterWhere } from "../RootSlice";
import { TextField, Button, Card, CardContent, CardActions } from "@material-ui/core";

export const Where = () => {
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
					<form onSubmit={handleSubmit(onSubmit)}>
						<div>
							<label htmlFor="where"></label>
							<TextField
								required
								id="where"
								label="where"
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