

//Router//

// Browser router - creates new router, we set it up once. It's gives us a tools to use react-router.
// Route-every single page.


// when react router mathes our patch it just cares if a path at least starts with whatever we have




//Switch zatrzymuje sprawdzanie sciezek w momencie znalezienia pierwszego dopasowania. Np gdy w pasku url pojawi sie /create,
//switch zacznie prace i gdy znajdzie dopasowanie w routerze przestaje dalej szukać. Dzięki takiej pracy możemy go wykorzystać
// do ustawienia strony 404 gdy nie znajdzie żadnego dopasowania, przejdzie przez wszsytkie routy, gdy żadna nie pasuje na samym koncu
// znajduje sie komponent bez propsa 'patch' co oznacza że ten komponent pasuje do wszsytkich sciezek, i zamontuje go.

// <BrowserRouter>
// <Switch>
// <Route path='/' component={ExpenseDashboardPage} exact={true} />
// <Route path='/create' component={CreatePage}/>
// <Route path='/help' component={HelpPage}/>
// <Route path='/edit' component={EditPage}/>
// </Switch>
// </BrowserRouter>


//react router niejawnie przekazuje propsy do naszych routow, gdzie są dostepne przez obiekt props.


