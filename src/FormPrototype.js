import React from 'react';
import { Provider, themes, Ref, Input, RadioGroup, Dropdown, Checkbox, Button} from '@fluentui/react-northstar'

class FormPrototype extends React.Component {
  constructor(props) {
    super(props);
    
    // Set the default values for the controls
    this.state = {
    values: {
    firstName: '',
    lastName: '',
    gender: undefined,
    color: undefined,
    username: '',
    terms: undefined,
    },
    invalid: {
    firstName: false,
    lastName: false,
    gender: false,
    color: false,
    username: false,
    terms: false,
    },
    };
    this.validations = {
    firstName: {
    type: 'field',
    regexes: [/^[A-Za-zÀ-ÖØ-öø-ÿěščřžďťňůĚŠČŘŽĎŤŇŮ -]{1,20}$/],
    errorMsgRef: React.createRef()
    },
    lastName: {
    type: 'field',
    regexes: [/^[A-Za-zÀ-ÖØ-öø-ÿěščřžďťňůĚŠČŘŽĎŤŇŮ -]{1,20}$/],
    errorMsgRef: React.createRef()
    },
    gender: {
    type: 'radio',
    onErrorFocusRef: React.createRef(),
    isRequired: true,
    errorMsgRef: React.createRef()
    },
    color: {
    type: 'dropdown',
    onErrorFocusRef: React.createRef(),
    isRequired: true,
    errorMsgRef: React.createRef()
    },
    username: {
    type: 'field',
    regexes: [/^[\w-]{3,20}$/],
    errorMsgRef: React.createRef()
    },
    terms: {
    type: 'checkbox',
    onErrorFocusRef: React.createRef(),
    isRequired: true,
    errorMsgRef: React.createRef()
    },
    };
    
    this.handleControlChange = this.handleControlChange.bind(this);
    this.handleControlBlur = this.handleControlBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } // End constructor;
  
  render() {
    return (
            <Provider theme={themes.teams}>
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="firstName" id="firstNameLabel">* Křestní jméno:</label>
            <Input
            name="firstName"
            id="firstName"
            value={this.state.values.firstName}
            onChange={this.handleControlChange}
            onBlur={(event, props) => {
      this.handleControlBlur(event, {name: 'firstName'});
    }}
            aria-labelledby="firstNameLabel"
            aria-describedby="firstNameHint firstNameHint1 firstNameHint2"
            aria-invalid={this.state.invalid.firstName}
            aria-required
            />
            <ErrorMessage ref={this.validations.firstName.errorMsgRef} controlName="firstName">
            <p id="firstNameHint">Křestní jméno je neplatné. Křestní jméno musí</p>
            <ul>
            <li id="firstNameHint1">mít maximálně 20 znaků,</li>
            <li id="firstNameHint2">obsahovat jen malá či velká písmena, mezery nebo pomlčky.</li>
            </ul>
            </ErrorMessage>
            
            <label htmlFor="lastName" id="lastNameLabel">* Příjmení:</label>
            <Input
            name="lastName"
            id="lastName"
            value={this.state.values.lastName}
            onChange={this.handleControlChange}
            onBlur={(event, props) => {
      this.handleControlBlur(event, {name: 'lastName'});
    }}
            aria-labelledby="lastNameLabel"
            aria-describedby="lastNameHint lastNameHint1 lastNameHint2"
            aria-invalid={this.state.invalid.lastName}
            aria-required
            />
            <ErrorMessage ref={this.validations.lastName.errorMsgRef} controlName="lastName">
            <p id="lastNameHint">Příjmení je neplatné. Příjmení musí</p>
            <ul>
            <li id="lastNameHint1">mít maximálně 20 znaků,</li>
            <li id="lastNameHint2">obsahovat jen malá či velká písmena, mezery nebo pomlčky.</li>
            </ul>
            </ErrorMessage>
            
            <label htmlFor="gender" id="genderLabel">* Pohlaví</label>
            <Ref innerRef={this.validations.gender.onErrorFocusRef}>
            <RadioGroup
id="gender"
            items={[
                    {
            name: 'gender',
            key: 'Male',
            label: 'Muž',
            value: 'male',
            },
                    {
            name: 'gender',
            key: 'Female',
            label: 'Žena',
            value: 'female',
            },
                    ]}
            McheckedValue={this.state.values.gender}
            onCheckedValueChange={this.handleControlChange}
            onBlur={(event) => {
      this.handleControlBlur(event, {name: 'gender'});
    }}
            aria-labelledby="genderLabel"
            aria-describedby="genderHint"
            aria-invalid={this.state.invalid.gender}
            aria-required
            />
            </Ref>
            <ErrorMessage ref={this.validations.gender.errorMsgRef} controlName="gender">
            <p id="genderHint">Prosím, zvolte pohlaví.</p>
            </ErrorMessage>
            
            <label htmlFor="color" id="colorLabel">* Vaše oblíbená barva:</label>
            <Ref innerRef={this.validations.color.onErrorFocusRef}>
            <Dropdown
id="color"
            search
            items={[
                    'Bílá',
                    'Žlutá',
                    'Oranžová',
                    'Červená',
                    'Modrá',
                    'Fialová',
                    'Růžová',
                    'Zelená',
                    'Hnědá',
                    'Černá',
                    ]}
            value={this.state.values.color}
            placeholder="Prosím, vyberte barvu"
            onChange={(event, props) => {
      props.name = 'color';
      this.handleControlChange(event, props);
    }}
            onBlur={(event) => {
      this.handleControlBlur(event, {name: 'color'});
    }}
            getA11ySelectionMessage={{
    onAdd: item => `${item} byla zvolena.`,
    }}
            aria-labelledby="colorLabel"
            aria-describedby="colorHint"
            searchInput={{
'aria-invalid': this.state.invalid.color
}}
            />
            </Ref>
            <ErrorMessage ref={this.validations.color.errorMsgRef} controlName="color">
            <p id="colorHint">Prosím, zvolte vaši oblíbenou barvu</p>
            </ErrorMessage>
            
            
            <label htmlFor="username" id="usernameLabel">* Uživatelské jméno:</label>
            <Input
            name="username"
            id="username"
            value={this.state.values.username}
            onChange={this.handleControlChange}
            onBlur={(event, props) => {
      this.handleControlBlur(event, {name: 'username'});
    }}
            aria-labelledby="usernameLabel"
            aria-describedby="usernameHint usernameHint1 usernameHint2"
            aria-invalid={this.state.invalid.username}
            aria-required
            />
            <ErrorMessage ref={this.validations.username.errorMsgRef} controlName="username">
            <p id="usernameHint">Uživatelské jméno je neplatné. Uživatelské jméno musí</p>
            <ul>
            <li id="usernameHint1">mít délku 3 až 20 znaků,</li>
            <li id="usernameHint2">obsahovat jen malá či velká písmena, čísla, pomlčky nebo podtržítka.</li>
            </ul>
            </ErrorMessage>

            <Ref innerRef={this.validations.terms.onErrorFocusRef}>
<Checkbox
id="terms"
label={<label htmlFor="terms" id="termsLabel">* Přijímám licenční podmínky a ujednání.</label>}
checked={this.state.values.terms}
            onChange={(event, props) => {
      props.name = 'terms';
      props.value = props.checked;
      this.handleControlChange(event, props);
    }}
            onBlur={(event) => {
      this.handleControlBlur(event, {name: 'terms'});
    }}
            aria-labelledby="termsLabel"
            aria-describedby="termsHint"
            aria-required
/>
            </Ref>
            <ErrorMessage ref={this.validations.terms.errorMsgRef} controlName="terms">
            <p id="termsHint">Musíte přijmout licenční podmínky a ujednání.</p>
            </ErrorMessage>

<p>Pole označená * jsou povinná.</p> 
            <Button>Odeslat</Button>
            </form>
            </Provider>
            );
  } // End render
  
  handleControlChange(event, props) {
    const stateUpdate = {[props.name]: props.value};
    this.setState({values: {...this.state.values, ...stateUpdate}});
  } // End handleControlChange
  
  handleControlBlur(event, props) {
    this.validateControl(props.name);
  } // End handleControlBlur
  
  handleSubmit(event) {
    event.preventDefault();
    if (this.validateForm()) {
      alert('Formulář je správně vyplněn a byl by úspěšně odeslán.');
    }
  } // End handleSubmit
  
  validateControl(name) {
    // First hide the error message if exists
    const validation = this.validations[name];
    const errorComponent = validation.errorMsgRef.current;
    errorComponent.hide();
    
    // If the control value is invalid, show the error and set the aria-invalid attribute
    const value = this.state.values[name];
    let isInvalid = false;
    if (validation.type === "field") { // begin if 1
      for (let i = 0; i < validation.regexes.length; i++) { // Begin for 1
        if (!validation.regexes[i].exec(value)) { // Begin if 2
          isInvalid = true;
          break;
        } // End if 2
      } // End for 1
    } else if ((validation.type === "radio") && validation.isRequired && !value) { // else if 1
      isInvalid = true;
    } else if ((validation.type === "dropdown") && validation.isRequired && !value) { // else if 1
      isInvalid = true;
    } else if ((validation.type === "checkbox") && validation.isRequired && !value) { // else if 1
      isInvalid = true;
    } // End if 1
    if (isInvalid) { // Begin if 1
      errorComponent.show();
      const stateUpdate = {[name]: isInvalid};
      this.setState({invalid: {...this.state.invalid, ...stateUpdate}});
      return false
    } // End if 1
    return true;
  } // End validateControl
  
  validateForm() {
// Validate all the controls
    for (const name in this.validations) { // Begin for 1
      if (!this.validateControl(name)) { // Begin if 1
        // Set the focus to the invalid control
        const validation = this.validations[name];
        let invalidControl;
        if (validation.type === 'field') { // Begin if 2
          invalidControl = document.getElementById(name);
        } else if (validation.type === 'radio') { // Else if 2
          invalidControl = validation.onErrorFocusRef.current.querySelector('*[role="radio"]');
        } else if (validation.type === 'checkbox') { // Else if 2
          invalidControl = validation.onErrorFocusRef.current;
        } else if (validation.type === 'dropdown') { // Else if 2
          invalidControl = validation.onErrorFocusRef.current.querySelector('input') || validation.onErrorFocusRef.current.querySelector('*[role="button"]');
        } // End if 2
        invalidControl.focus();
        return false;
      } // End if 1
    } // End for 1
    return true;
  } // End validateForm
  
} // End FormPrototype

class ErrorMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    isHidden: true
    }
  } // End constructor
  
  render() {
    const id = this.props.controlName + 'Error';
    return (
            <div id={id} className="error" role="alert">
    {this.state.isHidden ? null : this.props.children}
            </div>
            );
  } // End render
  
  show() {
    // Show the error after a delay so the screen reader can register the change, and so that the full label of the next tabbed item is read completely
    const delay = 1000;
    setTimeout(() => {
      this.setState({
      isHidden: false
      }); // End setState
    }, delay); // End setTimeout
  } // End show
  
  hide() {
    this.setState({
    isHidden: true
    }); // End setState
  } // End hide
} // End ErrorMessage

export default FormPrototype;
