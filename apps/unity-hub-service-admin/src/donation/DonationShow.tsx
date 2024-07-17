import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { VOLUNTEER_TITLE_FIELD } from "../volunteer/VolunteerTitle";
import { FUNDRAISER_TITLE_FIELD } from "../fundraiser/FundraiserTitle";

export const DonationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
