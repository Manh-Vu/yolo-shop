import React from 'react'
import heroSliderData from '../assets/fake-data/hero-slider'
import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import PolicyCard from '../components/PolicyCard'
import policy from '../assets/fake-data/policy'
import Grid from '../components/Grid'
import { Link } from 'react-router-dom'
import productData from '../assets/fake-data/product'
import ProductCard from '../components/ProductCard'


const Home = () => {
    return (
        <Helmet title="Trang Chủ">
            <HeroSlider
                data={heroSliderData}
                control={true}
                auto={true}
                timeOut={5000} />
            {/* end HeroSlise */}
            <Section>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {
                            policy.map((item, index) => <Link key={index} to="/policy">
                                <PolicyCard

                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            </Link>)
                        }
                    </Grid>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    Top sản phẩm bán chạy trong tuần
                </SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {
                            productData.getProducts(4).map((item, index) =>
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    slug={item.slug}
                                    price={Number(item.price)}
                                />
                            )
                        }
                    </Grid>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    Top sản phẩm hot trong tuần
                </SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {
                            productData.getProducts(8).map((item, index) =>
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    slug={item.slug}
                                    price={Number(item.price)}
                                />
                            )
                        }
                    </Grid>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    Top sản phẩm noi bat trong tuần
                </SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {
                            productData.getProducts(8).map((item, index) =>
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    slug={item.slug}
                                    price={Number(item.price)}
                                />
                            )
                        }
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Home

