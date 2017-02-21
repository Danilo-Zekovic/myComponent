/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import MyComponents from "src/components/myComponents";

describe("components/myComponents", () => {

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<MyComponents />);
      expect(component).to.not.be.null;
    });

  });

});
