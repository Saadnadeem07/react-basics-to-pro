# React Context API vs Prop Drilling – A Clean Example

[![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react)](https://react.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A **minimal, production-style** React demo showing **why prop drilling is painful** and **how Context API + `useContext` solves it elegantly**.

Perfect for **beginners learning state sharing** and **professionals reviewing best practices**.

---

# Problem: Prop Drilling

```tsx
<GreatGrandfather value={1000} city="Lahore" counter={0} setCounter={...}>
  <Grandfather value={...} city={...} counter={...} setCounter={...}>
    <Father value={...} city={...} counter={...} setCounter={...}>
      <Son /> <!-- Finally uses the data -->
    </Father>
  </Grandfather>
</GreatGrandfather>
```

Even though **only `Son` needs the data**, **every parent must pass it down**.

## Cons of Prop Drilling

| Issue                    | Description                           |
| ------------------------ | ------------------------------------- |
| **Verbose**              | Clutters components with unused props |
| **Hard to Maintain**     | Adding/removing props = edit 5+ files |
| **Breaks Encapsulation** | Intermediate components know too much |
| **Error-Prone**          | Easy to forget passing a prop         |

---

# Solution: Context API + `useContext`

```tsx
// Wrap once at root
<ContextStates>
  <GreatGrandfather />
</ContextStates>;

// Access anywhere below
const { value, city, counter, setCounter } = useContext(MyContext);
```

No props passed through `Grandfather` or `Father`.

### Pros of Context API

| Benefit              | Description                     |
| -------------------- | ------------------------------- |
| **Clean Components** | No unused props                 |
| **Direct Access**    | Any child can read/write        |
| **Scalable**         | Great for theme, auth, language |
| **Type-Safe**        | Works perfectly with TypeScript |

---

## Project Structure

```
src/
├── components/
│   ├── GreatGrandfather.jsx
│   ├── Grandfather.jsx
│   ├── Father.jsx
│   └── Son.jsx
├── context/
│   ├── MyContext.jsx
│   └── ContextStates.jsx
└── App.jsx
```

---

## How It Works

1. **`MyContext.jsx`** – Creates context
2. **`ContextStates.jsx`** – Provides state (`value`, `city`, `counter`)
3. **`Son.jsx`** – Consumes context with `useContext()`
4. **No props** passed down the chain

---

## Key Code Snippets

### Provider (ContextStates.jsx)

```jsx
const [counter, setCounter] = useState(0);
const value = 1000;
const city = "Lahore";

<MyContext.Provider value={{ value, city, counter, setCounter }}>
  {children}
</MyContext.Provider>;
```

### Consumer (Son.jsx)

```jsx
const { value, city, counter, setCounter } = useContext(MyContext);

<button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>;
```

---

## Output

```html
I'm GreatGrandfather I'm Grandfather... I'm Father... I'm Son... Value: 1000
City: Lahore Counter: 0 [clickable buttons]
```

---

## When to Use What?

| Use Case              | Recommended                            |
| --------------------- | -------------------------------------- |
| 1–2 levels deep       | Prop drilling OK                       |
| Theme, Auth, Language | Context API                            |
| Complex state logic   | useReducer + Context                   |
| Performance-critical  | Memoize with `useMemo`, split contexts |

---

## Best Practices

- Keep context **small and focused**
- Use **multiple contexts** if needed
- **Never overuse** – only for truly global data
- Combine with `useReducer` for complex flows

---

## Run Locally

```bash
git clone https://github.com/yourusername/react-context-vs-prop-drilling.git
cd react-context-vs-prop-drilling
npm install
npm start
```

---

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b feature/amazing`)
3. Commit (`git commit -m 'Add amazing feature'`)
4. Push (`git push origin feature/amazing`)
5. Open a Pull Request

---

## License

[MIT License](LICENSE) – free to use, modify, and learn from.

---

**Made with ❤️ for the React community**  
_Learn once, build anywhere._
