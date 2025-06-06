import { Typography } from "neetoui";
import { Input } from "neetoui/formik";
import { useTranslation } from "react-i18next";

const Form = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography style="h3" weight="semibold">
        {t("contact")}
      </Typography>
      <Input
        required
        label={t("email")}
        name="email"
        placeholder={t("enterYourEmail")}
        size="large"
      />
      <Typography className="pt-5" style="h3" weight="semibold">
        {t("shippingAddress")}
      </Typography>
      <div className="flex space-x-2">
        <Input
          required
          label={t("firstName")}
          name="firstName"
          placeholder={t("enterFirstName")}
          size="large"
        />
        <Input
          required
          label={t("lastName")}
          name="lastName"
          placeholder={t("enterLastName")}
          size="large"
        />
      </div>
      <Input
        required
        label={t("address")}
        name="address"
        placeholder={t("enterAddress")}
        size="large"
      />
      <Input
        required
        label={t("apartment")}
        name="apartment"
        placeholder={t("enterApartmentNumber")}
        size="large"
      />
      <div className="flex space-x-2">
        <Input
          required
          label={t("city")}
          name="city"
          placeholder={t("enterCity")}
          size="large"
        />
        <Input
          required
          label={t("zipCode")}
          name="zipCode"
          placeholder={t("enterZipCode")}
          size="large"
          type="number"
        />
      </div>
    </>
  );
};

export default Form;
