Beberapa Search Type di React Testing Library

1. Text: `<p>Cari text ini</p>` => getByText("Cari text ini")
2. LabelText: `<label for="email"/>` => getByLabelText("email")
3. PlaceholderText: `<input placeholder="masukan email"/>` => getByPlaceHolderText("masukan email")
4. AltText: `<img alt="image-profile"/>` => getByAltText("image-profile")
5. DisplayValue: `<input value="you@mail.com" />` => getByDisplayValue("you@mail.com")
6. Role: `<button>submit</button>` => getByRole("button")
7. TestId: `<div data-testId="item-test">Item apapun</div>` => getByTestId("item-test")

Search Variant di React Testing Library

1. getBy
2. queryBy
3. findBy