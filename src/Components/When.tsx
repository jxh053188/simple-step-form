import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { useHistory } from "react-router-dom";
import { enterWhen } from "../RootSlice";
import { TextField, Button, Card, CardContent} from "@material-ui/core";

export const When = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const when = useSelector((state: RootStateOrAny) => state.when)
	const { register, handleSubmit } = useForm({ defaultValues: { when } })
	
	const onSubmit = (data: { when: string; }) => {
		dispatch(enterWhen(data.when))
		history.push("/result")
	}
	
	return (
			<div className="flex-container">
			<Card className="survey">
                <CardContent>
                    <p>When is it?</p>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div>
							<label htmlFor="when"></label>
							<TextField
								required
								id="when"
								label="Enter a time"
                                variant="outlined"
                                {...register('when', { required: true })}
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