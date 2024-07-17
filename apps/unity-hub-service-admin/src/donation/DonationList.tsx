import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { VOLUNTEER_TITLE_FIELD } from "../volunteer/VolunteerTitle";
import { FUNDRAISER_TITLE_FIELD } from "../fundraiser/FundraiserTitle";

export const DonationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Donations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="amount" source="amount" />
        <TextField label="date" source="date" />
        <ReferenceField
          label="Volunteer"
          source="volunteer.id"
          reference="Volunteer"
        >
          <TextField source={VOLUNTEER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Fundraiser"
          source="fundraiser.id"
          reference="Fundraiser"
        >
          <TextField source={FUNDRAISER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
