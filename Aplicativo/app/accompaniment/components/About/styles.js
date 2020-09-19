import { BASE_COLOR, BRAND_PRIMARY } from 'style/colors';

export default {
  image: {
    width: 55,
    height: 55,
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  container: {
    backgroundColor: '#22262a',
    flex: 1,
    padding: 10
  },
  contentOffice: {
    backgroundColor: '#FFF',
    height: 200,
    borderWidth: 5,
    borderStyle: 'dotted',
    borderWidth: 3,
    borderRadius: 1,
    borderColor: BRAND_PRIMARY,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5
  },
  textNameOffice: {
    fontSize: 37,
    color: '#FFF'
  },
  contentEvaluation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  textEvaluation: {
    color: "#FFC640",
    fontSize: 12
  },
  iconStar: {
    color: "#FFC640",
    fontSize: 20
  },
  contentTextEvaluation: {
    flexDirection: 'row'
  },
  textDescription: {
    fontSize: 14
  },
  contentView: {
    marginTop: 30
  },
  subTitle: {
    color: '#FFF',
    opacity: 0.7
  },
  contentCardPeriod: {
    flexDirection: 'row',
    marginTop: 10
  },
  cardEmployee: {
    marginTop: 10
  }
}
