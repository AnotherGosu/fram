import { Button } from ".";
import { Trash } from "lucide-react";
import Link from "next/link";

describe("<Button />", () => {
  it("should mount button with correct text", () => {
    const title = "Confirm";

    cy.mount(<Button className="w-max">{title}</Button>);

    cy.contains("button", title);
  });

  it("should mount disabled button", () => {
    cy.mount(
      <Button
        disabled
        className="w-max"
      >
        Confirm
      </Button>,
    );

    cy.get("button").should("be.disabled");
  });

  it("should mount loading button", () => {
    cy.mount(
      <Button
        isLoading
        className="w-max"
      >
        Confirm
      </Button>,
    );

    cy.get("button").should("contain.html", "svg").and("be.disabled");
  });

  it("should mount icon button", () => {
    cy.mount(
      <Button isIconSize>
        <Trash />
      </Button>,
    );

    cy.get("button").and("contain.html", "svg");
  });

  it("should mount link as a child", () => {
    const title = "Sign in";
    const href = "/sign-in";

    cy.mount(
      <Button
        asChild
        className="w-max"
      >
        <Link href={href}>{title}</Link>
      </Button>,
    );

    cy.contains("a", title).should("have.attr", "href", href);
  });
});
