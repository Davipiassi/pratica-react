
import './App.css';
import Card from './card/Card';
import Section from './components/section/Section';

function App() {
  return (
    <div className="App">
      <Section
        title="Plans+"
        tagText="red"
        tagColor="red"
      >
        <Card
          title="Free" 
          items={[
            {text: "PNG templates", state: "enabled"},
            {text: "Figma responsive components", state: "disabled"},
            {text: "Constant updates", state: "disabled"},
            {text: "Custom templates", state: "disabled"},
          ]}
          price="0"
          color="red"
        />
        <Card
          title="Free" 
          items={[
            {text: "PNG templates", state: "enabled"},
            {text: "Figma responsive components", state: "disabled"},
            {text: "Constant updates", state: "disabled"},
            {text: "Custom templates", state: "disabled"},
          ]}
          price="0"
          color="red"
        />
        <Card
          title="Free" 
          items={[
            {text: "PNG templates", state: "enabled"},
            {text: "Figma responsive components", state: "disabled"},
            {text: "Constant updates", state: "disabled"},
            {text: "Custom templates", state: "disabled"},
          ]}
          price="0"
          color="red"
        />
      </Section>

      <Section
        title="New member"
        tagText="green"
        tagColor="green"
      >
        <Card
          title="Free" 
          items={[
            {text: "PNG templates", state: "enabled"},
            {text: "Figma responsive components", state: "disabled"},
            {text: "Constant updates", state: "disabled"},
            {text: "Custom templates", state: "disabled"},
          ]}
          price="0"
          color="green"
        />
        <Card
          title="Free" 
          items={[
            {text: "PNG templates", state: "enabled"},
            {text: "Figma responsive components", state: "disabled"},
            {text: "Constant updates", state: "disabled"},
            {text: "Custom templates", state: "disabled"},
          ]}
          price="0"
          color="green"
        />
        <Card
          title="Free" 
          items={[
            {text: "PNG templates", state: "enabled"},
            {text: "Figma responsive components", state: "disabled"},
            {text: "Constant updates", state: "disabled"},
            {text: "Custom templates", state: "disabled"},
          ]}
          price="0"
          color="green"
        />
      </Section>
    </div>
  );
}

export default App;
