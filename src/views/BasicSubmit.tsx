import * as React from 'react';
import { Breadcrumb } from 'antd';


interface ISearchSelectState {
  value: string
}

interface ISearchSelectProps {
  options: string[],
  handleOptionChange: (value: string) => void
}

class SearchSelect extends React.Component<ISearchSelectProps, ISearchSelectState> {
  constructor(props: ISearchSelectProps) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleSelectChange = (e: React.FormEvent<HTMLSelectElement>) => {
    this.setState({ value: e.currentTarget.value }, () => {
      this.props.handleOptionChange(this.state.value)
    });
  }

  handleResetChange = () => {
    this.props.handleOptionChange('RESET')
  }

  render() {
    return (
     <div>
       <select value={this.state.value} onChange={this.handleSelectChange}>
       {
         this.props.options.map(option => 
          <option key={option} value={option}>{option}</option>
        )
       }
       </select>
       <button onClick={this.handleResetChange}>reset</button>
     </div>
    )
  }
}

interface IProductCategoryProps {
  category: string
}

class ProductCategoryRow extends React.Component<IProductCategoryProps, {}> {
  constructor(props: IProductCategoryProps) {
    super(props);
  }
  render() {
    return (
     <div>
       <h4>{this.props.category}</h4>
     </div>
    )
  }
}

interface IProductRowProps {
  category: string,
  product: string,
  price: string
}

class ProductRow extends React.Component<IProductRowProps, {}> {
  constructor(props: IProductRowProps) {
    super(props);
  }
  render() {
    return (
     <div>
       <span style={{width: '100px', display: 'inline-block'}}>{this.props.product}</span>
       <span style={{width: '100px', display: 'inline-block'}}>{this.props.price}</span>
     </div>
    )
  }
}

interface IProductTableProps {
  products: Array<{ category: string, price: string, stocked: boolean, name: string }>
}

class ProductTable extends React.Component<IProductTableProps, {}> {
  constructor(props: IProductTableProps) {
    super(props);
  }
  render() {
    return (
     <div>
       <div>
        <span style={{width: '100px', display: 'inline-block'}}>Name</span>
        <span style={{width: '100px', display: 'inline-block'}}>Price</span>
       </div>
       {
         this.props.products.map((p, index) => 
          <div key={p.name} >
            <ProductCategoryRow category={p.category}/>
            <ProductRow category={p.category} product={p.name} price={p.price}/>
          </div>
        )
       }
     </div>
    )
  }
}

interface INormalLoginFormState {
  productData: Array<{ category: string, price: string, stocked: boolean, name: string }>
}


class FilterableProductTable extends React.Component<{}, INormalLoginFormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      productData: PRODUCTS
    }
  }

  handleOptionChange = (value: string) => {
    this.setState({
      productData: value === 'RESET' ? PRODUCTS : PRODUCTS.filter(p => p.name === value)
    })
  }

  render() {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Basic Submit</Breadcrumb.Item>
        </Breadcrumb>
        <SearchSelect options={OPTIONS} handleOptionChange={this.handleOptionChange}/>
        <ProductTable products={this.state.productData}/>
      </div>
    );
  }
}

const OPTIONS: string[] = ['Football', 'Baseball', 'Basketball', 'iPod Touch', 'iPhone 5', 'Nexus 7']

const PRODUCTS: Array<{ category: string, price: string, stocked: boolean, name: string }> = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
]
export default FilterableProductTable

