import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosCategoryComponent } from './produtos-category.component';

describe('ProdutosCategoryComponent', () => {
  let component: ProdutosCategoryComponent;
  let fixture: ComponentFixture<ProdutosCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
