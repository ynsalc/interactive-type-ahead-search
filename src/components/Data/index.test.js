import { render } from "@testing-library/react";
import Data from "./index";

const testData = {
  id: 1,
  fullName: "Sue Conn",
  phone: "230-044-8358",
  email: "Sue38@yahoo.com",
  policyNo: "3019572954425857",
};

describe("Data Component Renders", () => {
  describe("test data renders", () => {
    it("renders data", () => {
      render(<Data list={testData} />);
    });
  });
  describe("test data", () => {
    it("renders data", () => {
      render(<Data list={testData} />);
      
    });
  });
});
