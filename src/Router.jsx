import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/Home/index"
import Register from "./pages/Register/index"
import AuthState from "./Auth/Context"
import AuthRouter from "./Middleware/authRouter"

import Search from "./pages/ManageSummary/Search/index"
import ContactsList from "./pages/ManageContacts/ContactsList"
import Summaries from "./pages/Summaries"
import Articles from "./pages/Summaries/Articles"
import SendingHistory from "./pages/SendingHistory"
import Magazines from "./pages/Magazines"
import Volumes from "./pages/Magazines/Volumes"
import Solicitude from "./pages/ManagePublisher/Publisher/index"
import PersonalInformation from "./pages/ManagePublisher/Publisher/personalInfo"
import CustomRoute from "./components/CustomRoute"
import SummariesMagazine from "./pages/Magazines/Summaries"

const Routes = () => {
	return (
		<AuthState>
			<Router>
				<Switch>
					<Home path="/">
						<Switch>
							<Route path="/register" exact component={Register} />
							<AuthRouter>
								<CustomRoute condition="editor" path="/contactList" exact component={ContactsList} />
								<CustomRoute condition="editor" path="/" exact component={Search} />
								<CustomRoute condition="editor" path="/summaries" exact component={Summaries} />
								<CustomRoute condition="editor" path="/summaries/articles" exact component={Articles} />
								<CustomRoute condition="editor" path="/history" exact component={SendingHistory} />
								<CustomRoute condition="admin" path="/" exact component={Magazines} />
								<CustomRoute condition="admin" path="/magazines/volumes" exact component={Volumes} />
								<CustomRoute condition="admin" path="/magazines/summaries" exact component={SummariesMagazine} />
                <CustomRoute condition="admin" path="/request" exact component={Solicitude}/>
                <CustomRoute path="/personal" exact component={PersonalInformation}/>
							</AuthRouter>
						</Switch>
					</Home>
				</Switch>
			</Router>
		</AuthState>
	)
}

export default Routes