import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
  Container,
} from "@mui/material";
import { adminContext } from "../context/AdminContext";

const AddProductPage = () => {
  const data = React.useContext(adminContext);
  const { addProduct } = data;

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    color: "",
    size: "",
    feedbacks: [],
    likes: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    for (let key in newProduct) {
      let value = newProduct[key];
      if (typeof value === "string") {
        if (!value.trim()) {
          alert("Заполните поля");
          return;
        }
      }
    }

    addProduct(newProduct);

    setNewProduct({
      name: "",
      description: "",
      price: "",
      image: "",
      color: "",
      size: "",
    });
  };

  return (
    <Container>
      <div className="add-edit-page">
        <h2>Добавить товар</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            value={newProduct.name}
            label="Введите название"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            value={newProduct.description}
            label="Введите описание"
            variant="standard"
          />
          <TextField
            type="number"
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: parseInt(e.target.value) })
            }
            value={newProduct.price}
            label="Введите цену"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            value={newProduct.image}
            label="Введите фото"
            variant="standard"
          />
          <FormControl variant="standard">
            <InputLabel id="color-select-label">Выберите цвет</InputLabel>
            <Select
              onChange={(e) =>
                setNewProduct({ ...newProduct, color: e.target.value })
              }
              value={newProduct.color}
              label="Выберите цвет"
              labelId="color-select-label"
            >
              <MenuItem value="black">Чёрный</MenuItem>
              <MenuItem value="white">Белый</MenuItem>
              <MenuItem value="blue">Синий</MenuItem>
              <MenuItem value="green">Зеленый</MenuItem>
              <MenuItem value="gold">Золотой</MenuItem>
              <MenuItem value="red">Красный</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard">
            <InputLabel id="size-select-label">Выберите память</InputLabel>
            <Select
              onChange={(e) =>
                setNewProduct({ ...newProduct, size: e.target.value })
              }
              value={newProduct.size}
              label="Выберите память"
              labelId="size-select-label"
            >
              <MenuItem value="64">64 gb</MenuItem>
              <MenuItem value="128">128 gb</MenuItem>
              <MenuItem value="256">256 gb</MenuItem>
              <MenuItem value="512">512 gb</MenuItem>
              <MenuItem value="1">1 tb</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="outlined">
            Добавить
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default AddProductPage;
