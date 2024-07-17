import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DonationTitle } from "../donation/DonationTitle";

export const FundraiserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="goalAmount" source="goalAmount" />
        <NumberInput label="currentAmount" source="currentAmount" />
        <TextInput label="organization" source="organization" />
        <ReferenceArrayInput
          source="donations"
          reference="Donation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DonationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
