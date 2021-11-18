Beberapa Search Type di React Testing Library

Text: <p>Cari text ini</p> => getByText("Cari text ini")
LabelText: <label for="email"/> => getByLabelText("email")
PlaceholderText: <input placeholder="masukan email"/> => getByPlaceHolderText("masukan email")
AltText: <img alt="image-profile"/> => getByAltText("image-profile")
DisplayValue: <input value="you@mail.com" /> => getByDisplayValue("you@mail.com")
Role: <button>submit</button> => getByRole("button")
TestId: <div data-testId="item-test">Item apapun</div> => getByTestId("item-test")

Search Variant di React Testing Library

getBy
queryBy
findBy