import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { VolunteerList } from "./volunteer/VolunteerList";
import { VolunteerCreate } from "./volunteer/VolunteerCreate";
import { VolunteerEdit } from "./volunteer/VolunteerEdit";
import { VolunteerShow } from "./volunteer/VolunteerShow";
import { StoryList } from "./story/StoryList";
import { StoryCreate } from "./story/StoryCreate";
import { StoryEdit } from "./story/StoryEdit";
import { StoryShow } from "./story/StoryShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { ForumPostList } from "./forumPost/ForumPostList";
import { ForumPostCreate } from "./forumPost/ForumPostCreate";
import { ForumPostEdit } from "./forumPost/ForumPostEdit";
import { ForumPostShow } from "./forumPost/ForumPostShow";
import { CommentList } from "./comment/CommentList";
import { CommentCreate } from "./comment/CommentCreate";
import { CommentEdit } from "./comment/CommentEdit";
import { CommentShow } from "./comment/CommentShow";
import { VolunteerOpportunityList } from "./volunteerOpportunity/VolunteerOpportunityList";
import { VolunteerOpportunityCreate } from "./volunteerOpportunity/VolunteerOpportunityCreate";
import { VolunteerOpportunityEdit } from "./volunteerOpportunity/VolunteerOpportunityEdit";
import { VolunteerOpportunityShow } from "./volunteerOpportunity/VolunteerOpportunityShow";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { FundraiserList } from "./fundraiser/FundraiserList";
import { FundraiserCreate } from "./fundraiser/FundraiserCreate";
import { FundraiserEdit } from "./fundraiser/FundraiserEdit";
import { FundraiserShow } from "./fundraiser/FundraiserShow";
import { DonationList } from "./donation/DonationList";
import { DonationCreate } from "./donation/DonationCreate";
import { DonationEdit } from "./donation/DonationEdit";
import { DonationShow } from "./donation/DonationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"UnityHub Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Volunteer"
          list={VolunteerList}
          edit={VolunteerEdit}
          create={VolunteerCreate}
          show={VolunteerShow}
        />
        <Resource
          name="Story"
          list={StoryList}
          edit={StoryEdit}
          create={StoryCreate}
          show={StoryShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
        <Resource
          name="ForumPost"
          list={ForumPostList}
          edit={ForumPostEdit}
          create={ForumPostCreate}
          show={ForumPostShow}
        />
        <Resource
          name="Comment"
          list={CommentList}
          edit={CommentEdit}
          create={CommentCreate}
          show={CommentShow}
        />
        <Resource
          name="VolunteerOpportunity"
          list={VolunteerOpportunityList}
          edit={VolunteerOpportunityEdit}
          create={VolunteerOpportunityCreate}
          show={VolunteerOpportunityShow}
        />
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="Fundraiser"
          list={FundraiserList}
          edit={FundraiserEdit}
          create={FundraiserCreate}
          show={FundraiserShow}
        />
        <Resource
          name="Donation"
          list={DonationList}
          edit={DonationEdit}
          create={DonationCreate}
          show={DonationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
